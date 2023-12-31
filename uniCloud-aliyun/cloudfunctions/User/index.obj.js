'use strict';
// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器
	},
	GetUser(){
         const db=uniCloud.database()		
			let res =db.collection("users").where({
				user_name:"西川"
			}).get()
		return res
	},
	GetUser_collect(A){
		const db=uniCloud.database()
			let res =db.collection("poem").get()	
		return res 			
	},
	SetUser_creat(A){
		const db=uniCloud.database()
		db.collection("poem").add(A)
		db.collection("users").where("create").add({
			id:A._id,
			title:A.title,
			author:A.author
		})
	}
	SetUser_
	
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
}
