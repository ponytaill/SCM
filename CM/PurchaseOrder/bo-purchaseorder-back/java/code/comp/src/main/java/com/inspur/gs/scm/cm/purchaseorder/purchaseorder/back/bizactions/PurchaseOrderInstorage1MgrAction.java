package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.bizactions;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.AbstractManagerAction;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.bef.api.lcp.LcpFactoryManagerUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import com.inspur.edp.cef.entity.entity.IValuesContainer;

public class PurchaseOrderInstorage1MgrAction extends AbstractManagerAction<String> {
	private String id;
	private String IsFinished;
	public PurchaseOrderInstorage1MgrAction(IBEManagerContext managerContext, String id, String IsFinished) {
		super(managerContext);
		this.id = id;
		this.IsFinished = IsFinished;
	}
	@Override
	public  void execute() {
		IBusinessEntity entity=getEntity(id);
        entity.retrieve();
        //参数为BE的内部方法编号
        entity.executeBizAction("Instorage",IsFinished);
        //参数为be的configid,在be的配置tab页可查看
        IStandardLcp lcp = LcpFactoryManagerUtils.createLcp("com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.PurchaseOrder");
        lcp.save();
		IEntityData entityData = getMgr().retrieve(id).getData();
		IEntityDataCollection mxCollection = entityData.getChilds().get("OrderDetails");
		IStandardLcp materialLcp = LcpFactoryManagerUtils.createLcp("com.inspur.gs.scm.cm.material.material.back.Material");
		for(IEntityData data : mxCollection){
			String materialId = ((IValuesContainer)data.getValue("MaterialId")).getValue("MaterialId").toString();
			ModifyChangeDetail changeDetail = new ModifyChangeDetail(materialId);
			IEntityData materialDate = materialLcp.retrieve(materialId).getData();
			Integer repertory = (Integer) materialDate.getValue("Repertory");
			Integer rmount = (Integer) data.getValue("Amount");
			Integer sumNum = repertory+rmount;
			changeDetail.getPropertyChanges().put("Repertory", sumNum);
			materialLcp.modify(changeDetail);
		}
		materialLcp.save();
	}
	private IBusinessEntity getEntity(String dataId) {
		return (IBusinessEntity)super.getBEManagerContext().getEntity(dataId);
	}	private IBEService getMgr() {
		return (IBEService)super.getBEManagerContext().getBEManager();
	}
}