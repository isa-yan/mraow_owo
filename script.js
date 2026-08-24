var right_ear=document.getElementById('right-ear')
var left_ear=document.getElementById('left-ear')

var right_eye=document.getElementById('right-eye')
var left_eye=document.getElementById('left-eye')

var right_arm=document.getElementById('right-arm')
var left_arm=document.getElementById('left-arm')

var right_side=document.getElementById('right-side')
var left_side=document.getElementById('left-side')

var left_foot=document.getElementById('left-foot')
var right_foot=document.getElementById('right-foot')

const jump=document.getElementById('jump')
const purr=document.getElementById('purr')
const cray=document.getElementById('cray')
const meow=document.getElementById('meow')
const dance=document.getElementById('dance')

var kitty=document.getElementById('kitty')

const buttons=document.querySelectorAll('.buttons')


jump.addEventListener('click',()=>{
    kitty.classList.add('jump')

})

jump.addEventListener('animationend',()=>{
    kitty.classList.remove('jump')

})