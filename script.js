let unid = 0
$(".Add_btn").on("click", ()=>{
unid++
let newInput = `<div class="input_field_box" id="Delpar_${unid}"><input type="text" id="Delinp_${unid}" placeholder="paste url">
<button onclick="fetch_url(this)">Enter</button>
<img onclick="delete_btn(this)" src="./images/trash-10-xxl.png" alt="del" height="15px"></div>`
let newiframe = `<iframe src="" id="delframe_${unid}" frameborder="1"></iframe>`
$(".input_box").append(newInput);
$(".iframe_box").append(newiframe); 
})

function delete_btn(btndel) {
        
  let inputField = $(btndel).parent('div');
  let inputValue = inputField.attr('id');
  console.log(inputValue.split("_"));
  $(`#${inputValue}`).remove()
   $(`#delframe_${inputValue.split("_")[1]}`).remove() 
};

function fetch_url(btnElement) {      
  let inputField = $(btnElement).siblings('input[type="text"]'); 
  let url = inputField.val(); 
  let inputId = inputField.attr('id');
  console.log(inputId.split("_"), url);
  $(`#delframe_${inputId.split("_")[1]}`).attr("src", url);
}
