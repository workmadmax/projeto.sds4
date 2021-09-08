package com.devmax.dsvendas.dto;

import java.time.LocalDate;

import com.devmax.dsvendas.entities.Sale;

public class SaleDTO {
	
	private Long id;
	private Integer visited;
	private Integer deals;
	private LocalDate date;
	
	private SellerDTO seller;
	
	public SaleDTO() {
	}

	public SaleDTO(Long id, Integer visited, Integer deals, LocalDate date, SellerDTO seller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.date = date;
		this.seller = seller;
	}
	public SaleDTO(Sale entity) {
		id = entity.getId();
		visited = entity.getVisited();
		deals = entity.getDeals();
		date = entity.getDate();
		seller = new SellerDTO(entity.getSeller());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public SellerDTO getSeller() {
		return seller;
	}

	public void setSeller(SellerDTO seller) {
		this.seller = seller;
	}
	
	
	
}
