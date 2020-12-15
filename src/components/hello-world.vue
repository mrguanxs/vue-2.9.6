<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button type="primary" >hhhh</el-button>
    <el-form label-width="80px" label-position="left">
      <el-form-item label="duyige">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld!'
    }
  }
}
</script>

