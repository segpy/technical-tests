from django.core.mail import EmailMultiAlternatives


class MailService:
    def send_fibo_mail(self, fibonacci_result: list[int],
                       hora_actual: str) -> None:
        """
        Send an email with the fibonacci series and the current time

        :param list[int] fibo_result: list of fibonacci series
        :param str now: now time
        """
        to_send = ['sebastiangomezv98@gmail.com',
                   'jsgomezv@correo.udistrital.edu.co']

        email = EmailMultiAlternatives(
            '{}'.format('Prueba Tecnica - Juan Sebastian Gomez Valencia'),
            'Enviando prueba tecnica.',
            'sebastiangomezv98@gmail.com',
            to_send
        )
        html_content = ('<p>Prueba tecnica</p> ' +
                        '<p>La hora actual es: {}</p>'.format(
                            hora_actual) +
                        '<p>La serie de fibonacci es: {}</p>'.format(
                            fibonacci_result) +
                        '<p>Link del proyecto postman: {}</p>'.format(
                            'https://www.postman.com/winter-sunset-254163/workspace/pruebaproteccion/collection/23180770-1abe32c1-aa93-4cc7-a9d0-b3de2a4cbdbb?action=share&creator=23180770'
                        ) +
                        '<p>Parametro de autenticacion: {}</p>'.format(
                            '/?usuario=admin') +
                        '<p>Link del repositorio: {}</p>'.format(
                            'https://github.com/segpy/drf_crud') +
                        '<p>Link del deploy: {}</p>'.format(
                            'https://drf-crud-ooxr.onrender.com/swagger/') +
                        '<p>Drive link: {}</p>'.format(
                            'https://drive.google.com/drive/folders/1e-gRl8BcEAo3n6cHdZhRmMWSSw-jHZvU?usp=share_link')
                        )
        email.attach_alternative(html_content, "text/html")
        # email.send()
        print('Correo enviado')
        print(email)
