package com.inspur.gs.scm.cm.purchaseorder.purchaseorder.back.orderquery.processunit;

import com.inspur.edp.qdp.api.querymanager.IQOManager;
import com.inspur.edp.qdp.api.attributes.ProcessUnitConfigAttribute;
import com.inspur.edp.qdp.spi.processunit.QryAllDataSrcProcessUnit;
import com.inspur.edp.qdp.api.action.determination.attributes.BeforeExecutePUDtmsAttribute;
import com.inspur.edp.qdp.api.action.determination.attributes.AfterExecutePUDtmsAttribute;
import com.inspur.edp.qdp.core.util.ProcessUnitExpressionEvaluator;

@ProcessUnitConfigAttribute(code="OrderUnit",id="d76eb46a-43aa-41f4-9aa7-ebf4e19c14ff")
public class OrderQueryOrderUnitBuildInUnit extends QryAllDataSrcProcessUnit
{
    public OrderQueryOrderUnitBuildInUnit(IQOManager manager)
    {
        super(manager, OrderQueryOrderUnitBuildInUnit.class);
    }

    @Override
    public boolean canExecute() {
        return true;
    }

}
