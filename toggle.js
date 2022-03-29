// created with assistance from 
// https://youtu.be/WBSOebkzHo0

const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')

    onOff.textContent = toggle.checked ? 'ON' : 'OFF';
})
