package com.kycrm.member.domain.entity.premiummemberfilter;

import java.util.Date;

import com.kycrm.member.domain.vo.premiummemberfilter.PremiumMemberFilterBaseVO;

/**
 * 拍下时间
 * 
 * @Author ZhengXiaoChen
 * @Date 2018年10月29日下午2:11:08
 * @Tags
 */
public class BookDateForSQL extends PremiumMemberFilterBaseVO {

	/**
	 * @Author ZhengXiaoChen
	 * @Date 2018年10月29日下午2:11:05
	 */
	private static final long serialVersionUID = 1L;

	// 起始时间
	private Date startDate;

	// 截止时间
	private Date endDate;

	public BookDateForSQL() {
		super();

	}

	public BookDateForSQL(Date startDate, Date endDate) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "BookDateForSQL [startDate=" + startDate + ", endDate=" + endDate + "]";
	}

}
