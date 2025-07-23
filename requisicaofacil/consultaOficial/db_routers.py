class OracleReadOnlyRouter:
    """
    A router to control read-only access to the Oracle database.
    It ensures that only read operations are performed on the Oracle DB.
    """
    
    def db_for_read(self, model, **hints):
        """
        Attempts to read models go to the 'oracle' database.
        """
        return 'oracle'
    
    def db_for_write(self, model, **hints):
        """
        All write operations (create, update, delete) should go to the default database (SQLite).
        """
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations between models from different databases.
        """
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Only allow migrations on the default database.
        """
        if db == 'oracle':
            return False  # Prevent migrations on the Oracle database
        return None
