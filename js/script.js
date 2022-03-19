// getting contact-form inputs
document.querySelector("#formData").onsubmit=(e)=>{
    const name=document.querySelector("#names").value;

e.preventDefault()
    if (name==""){
        alert('Please enter your name');
    }else{
        alert(`Hello,${name}.\nThank you for your feedback.`)
    }

};