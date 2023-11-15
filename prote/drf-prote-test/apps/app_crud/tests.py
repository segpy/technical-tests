from django.test import TestCase
from .views.send_mail_view import SendMailView


class FibonacciTestCase(TestCase):

    def test_fibonacci_0(self):
        result = SendMailView.fibonacci_from_seeds(self, x=1, y=9, n=7)
        self.assertEqual(result, [1, 9, 10, 19, 29, 48, 77, 125, 202])

    # def test_fibonacci_1(self):
    #     result = SendMailView.fibonacci_from_seeds(x=1, y=2, n=10)
    #     self.assertEqual(result, [0])

    # def test_fibonacci_5(self):
    #     result = SendMailView.fibonacci_from_seeds(x=1, y=2, n=10)
    #     self.assertEqual(result, [0, 1, 1, 2, 3])

    # def test_fibonacci_10(self):
    #     result = SendMailView.fibonacci_from_seeds(x=1, y=2, n=10)
    #     self.assertEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
