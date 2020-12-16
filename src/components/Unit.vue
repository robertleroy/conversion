<script>
  export default {
    name: '',
    props: [ 'label', 'modelValue' ],
    emits: ['update:modelValue'],
    data() {
      return {
        title: '',
      };
    },
    computed: { },
    methods: { },
    mounted() { }
  };
</script>

<template>
  <div class="item">
    <label>{{label}}</label>
    <input type="text" 
      :value='modelValue'
      @input="$emit('update:modelValue', $event.target.value)">
      <slot/>
  </div>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

  .item{
    position:relative;
    display:inline-grid;
    grid-template-columns:auto 1fr;
    align-items: baseline;
    width:100%;
    border-bottom: 1px solid $muted-5;    
    font-family: $system;
  }
  .item:focus-within{
      border-bottom-color: $indigo-500;
      box-shadow: 0 1px 0 $indigo-500;
  }
  .item label{
    padding: 0 0 0 0.5rem;
      font-size:var(--h7);

    &::after {
      content: ':';
    }
  }
  .item input{
      font-size:initial;
      text-align:right;
      box-shadow:none;
      width:100%;
      padding-bottom: 0.15rem;
  }
  .item input:focus{
      box-shadow:none
  }
</style>
