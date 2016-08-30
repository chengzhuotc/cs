<template>
<hi></hi>
<wo></wo>
</template>
<script type="text/ecmascript-6">
import {MessageBox} from '../components/msgbox.js';
export default {  
  data () {
    return {
      name: 'w0'
    }
  },
  ready () {

// MessageBox("Good job!", "You clicked the button!", "success"); 

// console.log(MessageBox)
MessageBox({
  title: 'I\'m a title',
  message: 'I\'m a message',
  type: 'success',
  showCancelButton: true
}, function(action) {
  console.log('callback:', action);
  MessageBox('Clicked: ' + action);
});
// vm.$alert('password is required!');
// vm.$alert('password is required!', 'top');
// vm.$alert('password is required!', 'bottom');
console.log(MessageBox)

  }
}
</script>

<style>
  body{
    background-color: #000
  }
</style>