
# Django Rest
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

#  SERVICES
from apps.prote_test.services import FiboService


class FiboApiView(GenericAPIView):
    fibo_service = FiboService()

    def get(self, request, *args, **kwargs):
        """
        Method to get the fibonacci series from the seed
          passed by query params

        :param request: request object
        """
        try:
            return Response({'message': 'OK',
                             "data": self.fibo_service.
                             get_fibo_from_request(request)},
                            status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': ('Error trying to get'
                             'fibo series from request'),
                             'error': str(e)},
                            status=status.HTTP_400_BAD_REQUEST)
