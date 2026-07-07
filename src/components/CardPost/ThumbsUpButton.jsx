import { ModalComment } from "../ModalComment"
import { Spinner } from "../Spinner"
import { IconThumbsUp } from "../icons/IconThumbsUp"

export const ThumbsUpButton = ({ loading }) => {
    return (
        <ModalComment disabled={loading}>
            { loading ? <Spinner /> : <IconThumbsUp /> }
        </ModalComment>
    )
}