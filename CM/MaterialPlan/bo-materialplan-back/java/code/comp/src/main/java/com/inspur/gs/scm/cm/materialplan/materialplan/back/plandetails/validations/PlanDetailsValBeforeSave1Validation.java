package com.inspur.gs.scm.cm.materialplan.materialplan.back.plandetails.validations;
import com.inspur.edp.bef.api.exceptions.BizMessageException;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.bef.api.lcp.LcpFactoryManagerUtils;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.bef.spi.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.validation.AbstractValidation;
import com.inspur.edp.bef.api.action.validation.IValidationContext;
import com.inspur.edp.cef.entity.condition.*;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.commonmodel.engine.api.data.AssociationInfo;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import com.inspur.edp.cef.entity.entity.IValuesContainer;

public class PlanDetailsValBeforeSave1Validation extends AbstractValidation {
	public PlanDetailsValBeforeSave1Validation(IValidationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {
		IEntityData data=this.getData();
		 //输入的库存数量
        Integer storage=(Integer) data.getValue("MaterialAmount");
    
        String materialid = ((IValuesContainer)data.getValue("MaterialId")).getValue("MaterialId_MaterialCode").toString();
        
		Integer storage1 = new Integer(0);
		//取实际库存数量 LCP取其他be数据
        IStandardLcp lcpbxxe = LcpFactoryManagerUtils.createLcp("com.inspur.gs.scm.cm.material.material.back.Material");
		//拼装过滤条件
        EntityFilter filter= new EntityFilter();
        ArrayList<FilterCondition> list = new ArrayList<>();
        FilterCondition  filterCondition = new FilterCondition(0, "MaterialCode", ExpressCompareType.Equal, materialid, 0, ExpressRelationType.Empty, ExpressValueType.Value);
        list.add(filterCondition);
        filter.addFilterConditions(list);
        //获取报销限额数据
        List<IEntityData> bxxesj=lcpbxxe.query(filter);
		//取出报销限额
        String name="";
        for (IEntityData bxxesjitem: bxxesj) {
            name = bxxesjitem.getValue("MaterialName").toString();
            storage1=(Integer) bxxesjitem.getValue("Repertory");
        }
		//输入库存和实际库存比较，并给出提示
        if(storage1.compareTo(storage)>0)
        {
            IBizMessage text=getContext().createMessageWithLocation(MessageLevel.Error,name+"输入库存小于实际库存，订单不必要生成！");
            throw new BizMessageException("FSSC002",text);
        }
	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}