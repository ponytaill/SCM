package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.purchaseorder.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import com.inspur.edp.common.commonudt.billstate.entity.IBillState;
import java.math.BigDecimal;
import java.util.Date;

public final class PurchaseOrderUtils{
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
    public static String getOrderCode(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"OrderCode");
    }
    public static void setOrderCode(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"OrderCode",propertyValue);
    }
    public static String getOrderName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"OrderName");
    }
    public static void setOrderName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"OrderName",propertyValue);
    }
    public static AssoInfoBase getPurchaseDept(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"PurchaseDept");
    }
    public static void setPurchaseDept(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"PurchaseDept",propertyValue);
    }
    public static AssoInfoBase getPurchaser(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Purchaser");
    }
    public static void setPurchaser(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Purchaser",propertyValue);
    }
    public static Date getOrderDate(IEntityData data){
        return (Date)EntityDataUtils.getValue(data,"OrderDate");
    }
    public static void setOrderDate(IEntityData data,Date propertyValue){
        EntityDataUtils.setValue(data,"OrderDate",propertyValue);
    }
    public static BigDecimal getTotalPrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"TotalPrice");
    }
    public static void setTotalPrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"TotalPrice",propertyValue);
    }
    public static IBillState getBillStatus(IEntityData data){
        return (IBillState)EntityDataUtils.getValue(data,"BillStatus");
    }
    public static void setBillStatus(IEntityData data,IBillState propertyValue){
        EntityDataUtils.setValue(data,"BillStatus",propertyValue);
    }
    public static String getIsFinished(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"IsFinished");
    }
    public static void setIsFinished(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"IsFinished",propertyValue);
    }
    public static IEntityDataCollection getOrderDetailss(IEntityData data){
        return EntityDataUtils.getChildDatas(data,"OrderDetails");
    }
}