package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.purchaseorder.common;
import com.inspur.edp.bef.api.BefRtBeanUtil;;
import com.inspur.edp.bef.api.be.MgrActionUtils;
import com.inspur.edp.bef.api.lcp.IStandardLcp;;

public final class PurchaseOrderMgrActionUtils{
    public static java.lang.String Instorage1(java.lang.String id,java.lang.String IsFinished){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.PurchaseOrder");
        return (java.lang.String)MgrActionUtils.executeCustomAction(lcp,"Instorage1",id,IsFinished);
    }
    public static java.lang.String Instorage2(java.lang.String template){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.PurchaseOrder");
        return (java.lang.String)MgrActionUtils.executeCustomAction(lcp,"Instorage2",template);
    }
}