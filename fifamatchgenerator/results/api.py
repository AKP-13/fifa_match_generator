from results.models import Result
from rest_framework import viewsets, permissions
from .serializers import ResultSerializer

# Result Viewset
class ResultViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ResultSerializer

    def get_queryset(self):
        return self.request.user.results.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
