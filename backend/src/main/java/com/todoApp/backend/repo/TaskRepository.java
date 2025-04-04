package com.todoApp.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todoApp.backend.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
