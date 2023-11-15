# Django
from django.core.mail import send_mail
from datetime import datetime

# Django rest
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

#   SERVICES
from apps.app_crud.services import (FiboService, MailService)


class SendMailView(GenericAPIView):
    fibo_service = FiboService()
    mail_service = MailService()

    def get(self, request, *args, **kwargs):
        """
        Get method to send an email
        """
        credentials = request.query_params.get('user', None)

        try:
            now = datetime.now()
            fibonacci_result, hora = self.fibo_service.\
                get_fibo_from_local_hour(
                    now)
            if credentials == 'admin':
                self.mail_service.send_fibo_mail(fibonacci_result, hora)
                return Response({'message': 'Mail sent',
                                 "data": str(fibonacci_result),
                                 "time": str(hora)},
                                status=status.HTTP_200_OK)
            else:
                return Response({
                    'message': 'Invalid credentials'},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        except Exception as e:
            return Response({'message': 'Error trying to send email',
                             'error': str(e)},
                            status=status.HTTP_400_BAD_REQUEST)
