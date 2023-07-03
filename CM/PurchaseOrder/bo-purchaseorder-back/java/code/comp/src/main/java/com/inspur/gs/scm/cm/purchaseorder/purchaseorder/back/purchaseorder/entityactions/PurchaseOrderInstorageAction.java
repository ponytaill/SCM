package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.purchaseorder.entityactions;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.RootAbstractAction;
import com.inspur.edp.bef.spi.action.AbstractAction;
import com.inspur.edp.cef.entity.entity.IEntityData;


public class PurchaseOrderInstorageAction extends RootAbstractAction<String> {
	private String IsFinished;
	public PurchaseOrderInstorageAction(IBENodeEntityContext beContext, String IsFinished) {
		super(beContext);
		this.IsFinished = IsFinished;
	}


	@Override
	public  void execute() {
		//获取当前数据
        IEntityData data=this.getData();
        //给状态字段赋值，赋值枚举编号值即可
        data.setValue("IsFinished",IsFinished);
	}
	private IEntityData getData() {
		return (IEntityData)getBEContext().getCurrentData();
	}
}