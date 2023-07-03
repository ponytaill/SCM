package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.bizactions;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.AbstractManagerAction;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.commonmodel.engine.api.data.AssociationInfo;
import java.util.ArrayList;
import java.util.Arrays;

public class PurchaseOrderInstorage2MgrAction extends AbstractManagerAction<String> {
	private String template;
	public PurchaseOrderInstorage2MgrAction(IBEManagerContext managerContext, String template) {
		super(managerContext);
		this.template = template;
	}
	@Override
	public  void execute() {
// 创建数据
        IEntityData data = getMgr().retrieveDefault();
        // 获取模板数据
        IStandardLcp templateLcp = getBEManagerContext().getLcp("com.inspur.gs.scm.cm.material.material.back.Material");
        IEntityData templateData = templateLcp.retrieve(this.template).getData();
        // 创建变更集
        ModifyChangeDetail changeDetail = new ModifyChangeDetail(data.getID());
      
		changeDetail.getPropertyChanges().put("MaterialCode", templateData.getValue("MaterialCode"));
       changeDetail.getPropertyChanges().put("MaterialName", templateData.getValue("MaterialName"));
	   changeDetail.getPropertyChanges().put("MaterialCat", templateData.getValue("MaterialCat"));
	   changeDetail.getPropertyChanges().put("EvePrice", templateData.getValue("EvePrice"));
	   changeDetail.getPropertyChanges().put("Repertory", templateData.getValue("Repertory"));
	   changeDetail.getPropertyChanges().put("Supplier_SupplierName", templateData.getValue("Supplier_SupplierName"));
        getMgr().modify(changeDetail);}
	private IBusinessEntity getEntity(String dataId) {
		return (IBusinessEntity)super.getBEManagerContext().getEntity(dataId);
	}	private IBEService getMgr() {
		return (IBEService)super.getBEManagerContext().getBEManager();
	}
}