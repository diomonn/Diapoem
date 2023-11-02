'use strict';
// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	get() {
		const db=uniCloud.database()
		let res =db.collection('poem').aggregate().sample({
			size:1
		}).end()
	return res
	},
	async Set(data){
        try{
			// title":"","author":"西川","paragraphs
			if(!data.title||data.paragraphs.length>=0){
							return {ok:200,msg:"请完善您的诗作"}
			}else{
			console.log(data);
				 const db=uniCloud.database()
				   let res= await db.collection('poem').where({
				 	  paragraphs:data.paragraphs
				   }).get()  
				  if(res.affectedDocs!==0){
				   return {ok:200,msg:"请不要重复提交或该作品已经发表过",res}
				  }	  	
				 await db.collection('poem').add(data)
				 return {ok:200,msg:"恭喜您发表新作"}
			}	
			
		}catch(err){
			return {ok:400,msg:err}
		}
		
	}
}
