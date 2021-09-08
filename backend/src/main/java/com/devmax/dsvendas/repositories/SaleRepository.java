package com.devmax.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmax.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
