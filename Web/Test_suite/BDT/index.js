var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');


//-----------------------LOGIN FAILED/SUCCESFUL-----------------------//
Given('I go to todoist login screen', () => {
  browser.url('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=es');
});

When(/^I fill in my (.*) and (.*)$/ , (email, password) => {

 var mailInput = $('input[name="email"]');
 mailInput.click();
 mailInput.keys(email);

 var passwordInput = $('input[name="password"]');
 passwordInput.click();
 passwordInput.keys(password)

});

When('I try to login', () => {

  $('button=Iniciar sesión').click();

});

Then('I expect to not be able to login', () => {

  $('div.error_msg').waitForDisplayed(5000);

});

// Failure
Then('I expect to see {string}', error => {

  if(browser.$('div.error_msg').waitForDisplayed(5000)) {
    var alertText = browser.$('div.error_msg').getText();
    expect(alertText).to.include(error);
  }

});

//Success
Then('I see {string}', result => {

  if(browser.$('span=Bandeja de entrada').waitForDisplayed(5000)){
    mensaje = $('span=Bandeja de entrada').getText();
    expect(mensaje).to.include(result);
 }

});

//-----------------------Creating a new task-----------------------//

When('I click on new task', () => {
  var agendaView = $('.section_day');
  agendaView.$('span[class="icon icon_add"]').waitForDisplayed(2000);
  agendaView.$('span[class="icon icon_add"]').click();

});

When(/^I name the (.*)$/ , (task) => {

  var nameInput = $('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]');
  nameInput.click();
  nameInput.keys(task);
 
});

When('I add the task', () => {

  $('button=Añadir tarea').click();

});

Then('{string} appears', result => {

  if(browser.$('div[class="task_item_content_text"]').waitForDisplayed(5000)){
    var agendaView = $('.section_day');
    mensaje = agendaView.$('div[class="task_item_content_text"]').getText();
    expect(mensaje).to.include(result);
 }
});

//-----------------------Complete task-----------------------//

When('I complete the task', () => {
  var agendaView = $('.section_day');
  agendaView.$('div[class="ist_checkbox"]').click();

});

Then('a message with {string} appears', result => {

  if(browser.$('div[class="notifier_content"]').waitForDisplayed(5000)){
    mensaje = $('div[class="notifier_content"]').getText();
    expect(mensaje).to.include(result);
 }
});

//-----------------------Creating a new task on specific day-----------------------//

When('I click on next 7 days', () => {
  browser.pause(5000)
  var left_menu = $('.left_menu');
  left_menu.$('li[data-track="navigation|next_7_days"]').click();

});

When('I select the day for the new task', () => {

  $('#agenda_view > :nth-child(5) > .items > .agenda_add_task > .action').click();

});

Then('new task shuld exist', () => {

 $('#agenda_view > :nth-child(5) > .items > .agenda_item').waitForExist(5000);

});

//-----------------------Creating a new project-----------------------//

When('I click on add a project', () => {

  browser.pause(5000)
  var projectManager = $('.left_list_manager_holder');
  projectManager.$('a[class="action sel_add_project"]').waitForDisplayed(10000);
  projectManager.$('a[class="action sel_add_project"]').click();

});

When(/^I give the name (.*) to the project$/, (project) => {

  var formField = $('.form_field');
  formField.$('input[id="edit_project_modal_field_name"]').click();
  formField.$('input[id="edit_project_modal_field_name"]').keys(project);

});

When('I add the project', () => {

  $('button[type="submit"]').click();

});


When('I add a task to the project', () => {

  var editor = $('.list_editor');
  editor.$('a[class="action action_add_item"]').click();

});

//-----------------------Delete a created project-----------------------//

When('I want to delete project', () => {
  //var left_menu = $('.left_menu');
  $('.current > .item_table > tbody > tr > td.menu').click();

});


When('I delete it', () => {

  $('span=Eliminar proyecto').click();

}); 

//-----------------------Synchornize-----------------------//

When('I open settings', () => {
  browser.pause(5000)
  $('span[id="gear_holder"]').waitForDisplayed(10000);
  $('span[id="gear_holder"]').click();

}); 


When('I synchronize todoist', () => {

  $('.usermenu__container > :nth-child(1)').click();

}); 


//-----------------------Logout-----------------------//
When('I logout', () => {
  $('.usermenu__container > :nth-child(16)').waitForDisplayed(1000);
  $('.usermenu__container > :nth-child(16)').click();

}); 

Then('I am back at homepage', () => {
  browser.pause(5000)
  $('a=Iniciar sesión').waitForExist(1000);
 
 });