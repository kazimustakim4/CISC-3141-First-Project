var events = [
    {'Date': new Date(2021, 9, 30), 'Title': 'New Seminar on Tour in Bangladesh'},
    {'Date': new Date(2021, 9, 17), 'Title': 'Project'},
    {'Date': new Date(2021, 10, 15), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
    {'Date': new Date(2021, 10, 27), 'Title': '2 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gift'},
    {'Date': new Date(2021, 11, 25), 'Title': 'Chrismas Day'},
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);