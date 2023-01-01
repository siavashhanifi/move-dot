package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.DotMovementDirection;
import com.example.model.DotPosition;

@RestController
@CrossOrigin(origins = "*")
public class MoveDotController {

    private DotPosition dotPosition = new DotPosition();

	@PatchMapping("/moveDot")
	public DotPosition moveDot(@RequestBody String directionAsString) {
        DotMovementDirection direction = DotMovementDirection.fromString(directionAsString);
        this.dotPosition.movePosition(direction);
		return this.dotPosition;
	}

	@GetMapping("/dotPosition")
	public DotPosition getDotPosition()
	{
		return this.dotPosition;
	}
}
