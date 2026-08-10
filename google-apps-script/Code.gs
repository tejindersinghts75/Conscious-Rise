/**
 * Conscious Rise contact-form receiver.
 * Paste this file into Extensions > Apps Script from the destination Sheet.
 */
const SHEET_NAME = 'Enquiries';
const NOTIFICATION_EMAIL = 'info@consciousrise.in';
const HEADERS = [
  'Received at',
  'Name',
  'Email',
  'Company',
  'Service',
  'Budget',
  'Timeline',
  'Project details',
  'Source',
];

/** Run this once from the Apps Script editor before deploying the web app. */
function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Open Apps Script from the destination Google Sheet.');
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', spreadsheet.getId());

  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  ensureHeaders_(sheet);
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    validateSubmission_(data);

    const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if (!spreadsheetId) throw new Error('Run the setup function once before deploying.');
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    ensureHeaders_(sheet);

    const receivedAt = new Date();
    sheet.appendRow([
      receivedAt,
      safeCell_(data.name),
      safeCell_(data.email),
      safeCell_(data.company),
      safeCell_(data.service),
      safeCell_(data.budget),
      safeCell_(data.timeline),
      safeCell_(data.message),
      safeCell_(data.source),
    ]);

    sendNotification_(data, receivedAt);
    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: String(error.message || error) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function doGet() {
  return json_({ ok: true, service: 'Conscious Rise contact form' });
}

function validateSubmission_(data) {
  if (!data.name || !data.message || !data.email) throw new Error('Missing required fields.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) throw new Error('Invalid email address.');
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

function safeCell_(value) {
  const stringValue = String(value || '').trim();
  return /^[=+\-@]/.test(stringValue) ? "'" + stringValue : stringValue;
}

function escapeHtml_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sendNotification_(data, receivedAt) {
  const subject = 'New Conscious Rise enquiry — ' + (data.service || 'Website enquiry');
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company || '—'],
    ['Service', data.service || '—'],
    ['Budget', data.budget || '—'],
    ['Timeline', data.timeline || '—'],
    ['Received', receivedAt.toLocaleString()],
  ];
  const htmlRows = rows.map(function(row) {
    return '<tr><td style="padding:6px 12px 6px 0;color:#777">' + escapeHtml_(row[0]) +
      '</td><td style="padding:6px 0"><strong>' + escapeHtml_(row[1]) + '</strong></td></tr>';
  }).join('');

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    replyTo: String(data.email),
    name: 'Conscious Rise Website',
    subject: subject,
    body: rows.map(function(row) { return row[0] + ': ' + row[1]; }).join('\n') +
      '\n\nProject details:\n' + String(data.message || ''),
    htmlBody: '<div style="font-family:Arial,sans-serif;max-width:640px">' +
      '<h2 style="color:#5a071b">New project enquiry</h2><table>' + htmlRows + '</table>' +
      '<h3 style="margin-top:24px">Project details</h3><p style="white-space:pre-wrap;line-height:1.6">' +
      escapeHtml_(data.message) + '</p></div>',
  });
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
