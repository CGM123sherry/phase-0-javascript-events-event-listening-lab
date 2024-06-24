function addingEventListener() {

 const element = document.getElementById('button');

 if (element) {
    
    element.addEventListener('click', function() {
        
        console.log('button was clicked!');
    });

} else {
    console.error('Element with id "button" not found.');
}
}
addingEventListener();