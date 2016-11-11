from rest_framework import ListAPIView

from .serializers import ListSerializer, CardSerializer
from .model import List, Card

class ListApi(ListAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardApi(CardAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
