
from datetime import timezone

import datetime
import pytz

from .send_mail_view import SendMailView
from django.test import RequestFactory


import pytest


class TestSendMailView:

    # Test that sending an email with correct parameters returns a 200 OK response.
    def test_send_mail_with_correct_parameters(self):
        view = SendMailView()
        request = RequestFactory().get('/')
        response = view.get(request)
        assert response.status_code == 200

    # Test that sending an email with incorrect parameters returns a 400 BAD REQUEST status code.

    def test_send_mail_with_incorrect_parameters_returns_bad_request(self):
        view = SendMailView()
        request = RequestFactory().get('/')
        response = view.enviar_correo(request)
        assert response.status_code == 400

    # Test that the conversion of UTC time to local time in the SendMailView class returns the correct time.

    def test_converting_utc_to_local_time(self):
        # Create an instance of SendMailView
        send_mail_view = SendMailView()

        # Define a UTC time
        utc_time = datetime(2022, 1, 1, 12, 0, 0, tzinfo=pytz.utc)

        # Call the get_local_hour method with the UTC time
        local_time = send_mail_view.get_local_hour(utc_time)

        # Assert that the local time is correct
        assert local_time == ('2022-01-01 07:00:00', 0, 0)

    # Test that the Fibonacci series generated from the local time is correct

    def test_fibonacci_series_from_local_time(self):
        now = timezone.now()
        view = SendMailView()
        fibonacci_result = view.get_fibo_fron_local_hour(now)
        assert fibonacci_result == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
                                    144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657]

    # Test that sending an email with incorrect parameters returns a 400 BAD REQUEST status code.
    def test_send_mail_with_incorrect_parameters_returns_bad_request(self):
        view = SendMailView()
        request = RequestFactory().get('/')
        response = view.enviar_correo(request)
        assert response.status_code == 400
