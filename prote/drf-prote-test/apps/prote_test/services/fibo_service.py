from apps.prote_test.utils import TimeUtils
from datetime import datetime


class FiboService:
    time_utils = TimeUtils()

    def fibonacci_from_seeds(self, x: int, y: int, n: int) -> list[int]:
        """
        Generate a fibonacci series from two seeds

        :param x: frist seed
        :param y: second seed
        :param n: length of the series
        :return: fibonacci series
        """
        fibonacci_series = [x, y]

        for _ in range(n):
            next_num = fibonacci_series[-1] + fibonacci_series[-2]
            fibonacci_series.append(next_num)

        return fibonacci_series

    def get_fibo_from_local_hour(self, now: datetime) -> tuple[list[int], str]:
        """
        Get the fibonacci series from the local hour

        :param datetime now: local hour in DateTime type
        :return list[int]: fibonacci series
        :return str: local hour
        """
        hora, minuto, segundo = self.time_utils.get_local_hour(now)
        x = minuto // 10  # Primera semilla
        y = minuto % 10  # Segunda semilla
        n = segundo  # Longitud de la serie que deseas generar
        fibonacci_result = self.fibonacci_from_seeds(x, y, n)
        fibonacci_result.reverse()
        return fibonacci_result, hora

    def get_fibo_from_request(self, request) -> list[int]:
        """
        Get the fibonacci series from the request params

        :param request: request object
        :return: _description_
        """
        x = request.query_params.get('x')
        y = request.query_params.get('y')
        n = request.query_params.get('n')
        if x and y and n:
            fibonacci_result = self.fibonacci_from_seeds(
                int(x), int(y), int(n))
            fibonacci_result.reverse()
            return fibonacci_result
        else:
            raise Exception('x,y,n are required params')
