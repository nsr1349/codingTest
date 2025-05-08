const formatTime = (time) => (+ time.slice(0,2)) * 60 + (+ time.slice(3,5))

const solution = (video_len, pos, op_start, op_end, commands) => {
    const video_len_ = formatTime(video_len)
    const op_start_ = formatTime(op_start)
    const op_end_ = formatTime(op_end)
    let pos_ = formatTime(pos)

    const opSkip = () => pos_ = op_start_ <= pos_ && pos_ <= op_end_ ? op_end_ : pos_ 

    const options = {
        next : () => pos_ = Math.min(pos_ + 10, video_len_),
        prev : () => pos_ = Math.max(pos_ - 10, 0)
    }

    for (const a of commands){
        opSkip()
        options[a]()
    }  
    opSkip()

    return `${`${Math.floor(pos_ / 60)}`.padStart(2, '0')}:${`${Math.floor(pos_ % 60)}`.padStart(2, '0')}`
}


console.log(solution("34:33","13:00","00:55","02:55",["next", "prev"]))
console.log(solution("10:55","00:05","00:15","06:55",["prev", "next", "next"],"06:55"))