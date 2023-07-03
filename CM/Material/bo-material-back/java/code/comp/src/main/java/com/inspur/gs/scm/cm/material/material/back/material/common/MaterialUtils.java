package com.inspur.gs.scm.cm.material.material.back.material.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import java.math.BigDecimal;
import java.util.Date;

public final class MaterialUtils{
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
    public static String getMaterialCode(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"MaterialCode");
    }
    public static void setMaterialCode(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"MaterialCode",propertyValue);
    }
    public static String getMaterialName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"MaterialName");
    }
    public static void setMaterialName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"MaterialName",propertyValue);
    }
    public static AssoInfoBase getMaterialCat(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"MaterialCat");
    }
    public static void setMaterialCat(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"MaterialCat",propertyValue);
    }
    public static BigDecimal getEvePrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"EvePrice");
    }
    public static void setEvePrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"EvePrice",propertyValue);
    }
    public static Integer getRepertory(IEntityData data){
        return (Integer)EntityDataUtils.getValue(data,"Repertory");
    }
    public static void setRepertory(IEntityData data,Integer propertyValue){
        EntityDataUtils.setValue(data,"Repertory",propertyValue);
    }
    public static IEntityDataCollection getMaterialFiles(IEntityData data){
        return EntityDataUtils.getChildDatas(data,"MaterialFile");
    }
}