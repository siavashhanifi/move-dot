package siavash.moveDot.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import siavash.moveDot.model.DotMovementDirection;
import siavash.moveDot.model.DotPosition;

@RestController
@CrossOrigin(origins = "*")
public class DotController
{

    private DotPosition dotPosition = new DotPosition();

    @PatchMapping("/moveDot")
    public void moveDot(@RequestBody String directionAsString)
    {
        DotMovementDirection direction = DotMovementDirection.fromString(directionAsString);
        this.dotPosition.movePosition(direction);
    }

    @GetMapping("/dotPosition")
    public DotPosition getDotPosition()
    {
        return this.dotPosition;
    }
}
