package com.inspur.gs.scm.cm.material.material.back.material.common;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.common.commonudt.udt.attachmentinfo.attachmentinfo.entity.IAttachmentInfo;

public final class MaterialFileUtils{
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
    public static IAttachmentInfo getFileInfo(IEntityData data){
        return (IAttachmentInfo)EntityDataUtils.getValue(data,"FileInfo");
    }
    public static void setFileInfo(IEntityData data,IAttachmentInfo propertyValue){
        EntityDataUtils.setValue(data,"FileInfo",propertyValue);
    }
}