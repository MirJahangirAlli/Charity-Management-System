package com.example.backend.Repository;

import com.example.backend.Model.Doner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DonorRepository extends JpaRepository<Doner,Long> {
}
