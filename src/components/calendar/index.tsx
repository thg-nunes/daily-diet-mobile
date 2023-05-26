import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'

type CalendarProps = {
  setCalendarIsOpen: (value: React.SetStateAction<boolean>) => void
  setSelectedDate: (value: React.SetStateAction<string>) => void
}

export const Calendar = ({
  setCalendarIsOpen,
  setSelectedDate
}: CalendarProps) => {
  return (
    <RNDateTimePicker
      value={new Date()}
      display="spinner"
      mode="date"
      minimumDate={new Date()}
      onChange={(event: DateTimePickerEvent, date: Date | undefined) => {
        if (date && event.type === 'set') {
          setCalendarIsOpen(false)
          setSelectedDate(Intl.DateTimeFormat('pt-BR').format(date))
        }

        setCalendarIsOpen(false)
      }}
    />
  )
}
