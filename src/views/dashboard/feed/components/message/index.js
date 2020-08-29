import React from "react";
import Box from "../../../common/box";
import moment from "moment";
import PropTypes from "prop-types";
import Typography from "../../../common/typography";
import Avatar from "../../../common/avatar";
import Bubble from "./elements";

const Message = ({
  otherProfileImg,
  isYours,
  message,
  sentAt,
  seenAt,
  yourImage,
}) => (
  <Box display="flex" justifyContent={isYours ? "flex-end" : "flex-start"}>
    {!isYours && (
      <Avatar
        mt={5}
        mr={5}
        src={otherProfileImg || "/static/img/general/avatar.png"}
      />
    )}

    <Box display="flex" flexDirection="column">
      <Bubble color={isYours ? "primary" : "secondary"}>{message}</Bubble>
      <Box
        alignItems="center"
        justifyContent={isYours ? "flex-end" : "flex-start"}
        display="flex"
        width="100%"
      >
        <Typography
          fontSize="0.6rem"
          textAlign={isYours ? "right" : "left"}
          color="lightGrey"
        >
          {moment(sentAt).format("lll")}
        </Typography>
        {isYours && seenAt && (
          <Avatar
            ml={5}
            size={15}
            src={otherProfileImg || "/static/img/general/avatar.png"}
          />
        )}
      </Box>
    </Box>
    {isYours && (
      <Avatar
        mt={5}
        ml={5}
        src={yourImage || "/static/img/general/avatar.png"}
      />
    )}
  </Box>
);

Message.propTypes = {
  otherProfileImg: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isYours: PropTypes.bool.isRequired,
  sentAt: PropTypes.any.isRequired,
  seenAt: PropTypes.any.isRequired,
  yourImage: PropTypes.string.isRequired,
};

export default Message;
