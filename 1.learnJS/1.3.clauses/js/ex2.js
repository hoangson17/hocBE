const action = `edit`;

if(action === 'create' ||action === 'add'||action === 'insert'){
    console.log(`thêm`);
}else if(action === `update`|| action === 'edit'){
    console.log(`sửa`);
}else if(action === `delete`|| action === 'remove'||action ===`destroy`){
    console.log(`xóa`);
}else{
    console.log(`danh sách`);
}