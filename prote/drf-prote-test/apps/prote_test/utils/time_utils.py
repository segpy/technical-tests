from datetime import datetime
import pytz


class TimeUtils:
    def get_local_hour(self, now: datetime) -> tuple[str, int, int]:
        """
        Get the local hour from UTC time

        :param request: object SendMailView type
        :param now: now time in DateTime type
        :return: now time in local time, minute and second
        """
        # Zona horaria local
        tz_bogota = pytz.timezone('America/Bogota')
        now_tz = now.astimezone(tz_bogota)

        # Datetime a string formateado
        format = "%H:%M:%S"
        now_formtted = now_tz.strftime(format)

        # String a Datetime, Hora en UTC
        hora_utc = datetime.strptime(now_formtted, format)

        return (now_formtted,
                hora_utc.minute,
                hora_utc.second)
