package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.purchaseorder.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;

public final class OrderDetailsUtils{
    public static String getID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ID");
    }
    public static void setID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ID",propertyValue);
    }
    public static String getParentID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ParentID");
    }
    public static void setParentID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ParentID",propertyValue);
    }
    public static AssoInfoBase getMaterialId(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"MaterialId");
    }
    public static void setMaterialId(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"MaterialId",propertyValue);
    }
    public static Integer getAmount(IEntityData data){
        return (Integer)EntityDataUtils.getValue(data,"Amount");
    }
    public static void setAmount(IEntityData data,Integer propertyValue){
        EntityDataUtils.setValue(data,"Amount",propertyValue);
    }
    public static AssoInfoBase getSupplier(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Supplier");
    }
    public static void setSupplier(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Supplier",propertyValue);
    }
}