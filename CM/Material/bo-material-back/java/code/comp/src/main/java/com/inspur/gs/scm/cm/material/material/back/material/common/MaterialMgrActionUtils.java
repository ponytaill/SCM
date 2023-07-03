package com.inspur.gs.scm.cm.material.material.back.material.common;
import com.inspur.edp.bef.api.BefRtBeanUtil;;
import com.inspur.edp.bef.api.be.MgrActionUtils;
import com.inspur.edp.bef.api.lcp.IStandardLcp;;

public final class MaterialMgrActionUtils{
    public static com.inspur.edp.cef.entity.entity.IEntityData UpdateAttachment(com.inspur.edp.common.component.attachment.AttachInfo updateAttachInfo){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.scm.cm.material.material.back.Material");
        return (com.inspur.edp.cef.entity.entity.IEntityData)MgrActionUtils.executeCustomAction(lcp,"UpdateAttachment",updateAttachInfo);
    }
    public static com.inspur.edp.cef.entity.entity.IEntityData BatchUploadAttachment(com.inspur.edp.common.component.attachment.AttachInfo batchUploadInfo){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.scm.cm.material.material.back.Material");
        return (com.inspur.edp.cef.entity.entity.IEntityData)MgrActionUtils.executeCustomAction(lcp,"BatchUploadAttachment",batchUploadInfo);
    }
}