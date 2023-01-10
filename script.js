var inputs = [].slice.call(document.querySelectorAll('input[type="text"]'));

inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
	var empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length;
  submitButton.disabled = empty !== 0;
  resetButton.disabled = empty === 3;
}
checkInputs();

submitButton.onclick = function() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = document.querySelector('input[id="age"]').value;
    var height = document.querySelector('input[id="height"]').value;
    var weight = document.querySelector('input[id="weight"]').value;
    var activity = document.querySelector('input[name="activity"]:checked').value;
    var form = document.querySelector('form[id="secondForm"]');

    var n = (10*weight) + (6.25*height) - (5*age);
    if(gender=="male")
    {
        n += 5;
    }
    else{
        n-=161;
    }

    switch(activity){
      case "min":
        n*=1.2;
        break;
      case "low":
         n*=1.375;
         break;
      case "medium":
        n*=1.55;
        break;
      case "height":
        n*=1.725;
        break;
      case "height":
        n*=1.9;
        break;      
    }

    var loseWeight = document.querySelector('p[id="loseWeight"]'); 
    var keepWeight = document.querySelector('p[id="keepWeight"]'); 
    var getWeight = document.querySelector('p[id="getWeight"]'); 
    loseWeight.innerHTML = Math.round(n*0.85) + ' ккал';
    keepWeight.innerHTML = Math.round(n) + ' ккал';
    getWeight.innerHTML = Math.round(n*1.15) + ' ккал';
    form.classList.remove("hideSecondForm");
    return false;
  };
  resetButton.onclick = function() {
    document.querySelector('input[id="age"]').value = null;
    var form = document.querySelector('form[id="secondForm"]');
    form.classList.add("hideSecondForm");
    document.querySelector('input[id="height"]').value = null;
    document.querySelector('input[id="weight"]').value = null;
    submitButton.disabled = true;
    resetButton.disabled = true;

    document.querySelector('input[id="activity-minimal"]').checked = true;
    document.querySelector('input[id="gender-male"]').checked = true;
    return false;

  }