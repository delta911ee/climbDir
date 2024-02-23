/*
A utility function to climb the folder/file/diirectory heirarchy.
path: String, the path to be modified.
level: int, levels to be climbed.
*/

function climbdir(path, level){
    let items = path.split("\\");
    let result = '';

    if(items.length < level){
        return;
    }
    
    for(let index = 0; index<level; index++){
        items.pop();
    }
    
    items.forEach(item=>{
        result += item+"\\";
    })

    return result;
}

module.exports = climbdir;