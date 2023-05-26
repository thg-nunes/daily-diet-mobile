import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'

type ClockProps = {
  setSelectedHour: React.Dispatch<React.SetStateAction<string>>
  setClockIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Clock = ({ setSelectedHour, setClockIsOpen }: ClockProps) => {
  return (
    <RNDateTimePicker
      value={new Date()}
      display="clock"
      mode="time"
      onChange={(event: DateTimePickerEvent, date: Date | undefined) => {
        if (date && event.type === 'set') {
          setClockIsOpen(false)
          setSelectedHour(`${date.getHours()}:${date.getMinutes()}`)
        }

        setClockIsOpen(false)
      }}
    />
  )
}
