package com.priya.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.priya.demo.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long> {
	Team findByTeamName(String teamName);
}
