package se.cygni.snake.eventapi.request;

import com.fasterxml.jackson.annotation.JsonCreator;
import se.cygni.snake.eventapi.ApiMessage;
import se.cygni.snake.eventapi.type.ApiMessageType;

@ApiMessageType
public class DisconnectFromArena extends ApiMessage {

    @JsonCreator
    public DisconnectFromArena() {}

}
