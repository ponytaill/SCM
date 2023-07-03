package com.inspur.gs.scm.cm.materialplan.materialplan.back.materialplan.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import com.inspur.edp.common.commonudt.billstate.entity.IBillState;
import com.inspur.edp.common.commonudt.processinstance.entity.IProcessInstance;
import java.math.BigDecimal;
import java.util.Date;

public final class MaterialPlanUtils{
    public static String getID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ID");
    }
    public static void setID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ID",propertyValue);
    }
    public static Date getVersion(IEntityData data){
        return (Date)EntityDataUtils.getValue(data,"Version");
    }
    public static void setVersion(IEntityData data,Date propertyValue){
        EntityDataUtils.setValue(data,"Version",propertyValue);
    }
    public static IBillState getBillStatus(IEntityData data){
        return (IBillState)EntityDataUtils.getValue(data,"BillStatus");
    }
    public static void setBillStatus(IEntityData data,IBillState propertyValue){
        EntityDataUtils.setValue(data,"BillStatus",propertyValue);
    }
    public static IProcessInstance getProcessInstance(IEntityData data){
        return (IProcessInstance)EntityDataUtils.getValue(data,"ProcessInstance");
    }
    public static void setProcessInstance(IEntityData data,IProcessInstance propertyValue){
        EntityDataUtils.setValue(data,"ProcessInstance",propertyValue);
    }
    public static AssoInfoBase getApplicant(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Applicant");
    }
    public static void setApplicant(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Applicant",propertyValue);
    }
    public static Date getDeliveryDate(IEntityData data){
        return (Date)EntityDataUtils.getValue(data,"DeliveryDate");
    }
    public static void setDeliveryDate(IEntityData data,Date propertyValue){
        EntityDataUtils.setValue(data,"DeliveryDate",propertyValue);
    }
    public static AssoInfoBase getPurchaseDept(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"PurchaseDept");
    }
    public static void setPurchaseDept(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"PurchaseDept",propertyValue);
    }
    public static String getPlanCode(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"PlanCode");
    }
    public static void setPlanCode(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"PlanCode",propertyValue);
    }
    public static String getPlanName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"PlanName");
    }
    public static void setPlanName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"PlanName",propertyValue);
    }
    public static Boolean getIsPurchaseOrder(IEntityData data){
        return (Boolean)EntityDataUtils.getValue(data,"IsPurchaseOrder");
    }
    public static void setIsPurchaseOrder(IEntityData data,Boolean propertyValue){
        EntityDataUtils.setValue(data,"IsPurchaseOrder",propertyValue);
    }
    public static BigDecimal getTotalPrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"TotalPrice");
    }
    public static void setTotalPrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"TotalPrice",propertyValue);
    }
    public static AssoInfoBase getPurchaser(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Purchaser");
    }
    public static void setPurchaser(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Purchaser",propertyValue);
    }
    public static IEntityDataCollection getPlanDetailss(IEntityData data){
        return EntityDataUtils.getChildDatas(data,"PlanDetails");
    }
}