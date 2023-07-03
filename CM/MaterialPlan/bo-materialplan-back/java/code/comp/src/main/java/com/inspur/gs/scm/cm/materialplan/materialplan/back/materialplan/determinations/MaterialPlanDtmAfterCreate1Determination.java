package com.inspur.gs.scm.cm.materialplan.materialplan.back.materialplan.determinations;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.spi.action.determination.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.determination.AbstractDetermination;
import com.inspur.edp.bef.api.action.determination.IDeterminationContext;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.bef.api.action.determination.IBeforeRetrieveDtmContext;

import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IValuesContainer;
import io.iec.edp.caf.boot.context.CAFContext;
import io.iec.edp.caf.core.session.CafSession;

public class MaterialPlanDtmAfterCreate1Determination extends AbstractDetermination {
	public MaterialPlanDtmAfterCreate1Determination(IDeterminationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {
		        CafSession curSession=CAFContext.current.getCurrentSession();
        IEntityData data=this.getData();
        IValuesContainer entityDataValuesContainer = (IValuesContainer)data;
        //制单人默认值
        IValuesContainer Applicant = (IValuesContainer) entityDataValuesContainer.createValue("Applicant");
        Applicant.setValue("Applicant",curSession.getUserId());
        Applicant.setValue("Applicant_ID",curSession.getUserName());
        Applicant.setValue("Applicant_Name",curSession.getUserName());
        data.setValue("Applicant",Applicant);
	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}